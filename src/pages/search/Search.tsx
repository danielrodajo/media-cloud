import React, { useState, useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarSearch from '../../components/ToolBarSearch/ToolBarSearch';
import JsonUsers from '../../testing/Users.json';
import UserSearch from '../../components/UserSearch/UserSearch';
import * as Mutations from '../../graphql/mutations';
import * as Queries from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';

const Search: React.FC = () => {

    const [searchText, setSearchText] = useState<String>();
    const [searching, setSearching] = useState(false);
    const [users, setUsers] = useState([]);

    async function searchUsers(name: String) {
        try {
            setSearching(true);
            const result: any = await API.graphql(graphqlOperation(Queries.listUsers, {
                filter: {
                    name: {
                        contains: name
                    }
                },
                limit: 10
            }));
            setSearching(false);
            setUsers(result.data.listUsers.items);
          } catch (error) {
            console.log(error);
            setSearching(false);
          }
    }

    useEffect(() => {
        if (searchText) 
            searchUsers(searchText.toLowerCase()!)
        else
            setUsers([])
    }, [searchText]);

    return (
        <IonPage>
            <ToolbarSearch result={setSearchText}/>
                <IonContent className="my-custom-content">
            {
                searching ? 
                    <CustomSpinner /> 
                :              
                    users!.map((user:any) => <UserSearch key={user.id} name={user.name}/>)           
            }
            </IonContent>
        </IonPage>
    );
}

export default Search;