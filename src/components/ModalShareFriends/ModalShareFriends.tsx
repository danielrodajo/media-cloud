import React, { useEffect, useState } from 'react';
import './ModalShareFriends.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { IonModal, IonHeader, IonToolbar, IonText, IonItem, IonIcon, IonContent } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import ShareFriend from './ShareFriend/ShareFriend';
import { API, graphqlOperation } from 'aws-amplify';
import * as Queries from '../../graphql/queries';
import * as actions from "../../store/actions/index";


export interface ModalShareFriendsProps {
    show: boolean,
    setShow: (show: boolean) => void,
    file: any,
}
 
const ModalShareFriends: React.SFC<ModalShareFriendsProps> = props => {
    const dispatch = useDispatch();

    const user = useSelector((state:RootState) => state.AuthReducer.user);
    const friends = useSelector((state: RootState) => state.FriendReducer.friends);

    //Accion para poner fichero en estado comparticion
    const shareFile = (filePath: any, userId: String) => dispatch(actions.sharingFile(filePath, userId));
    const stopShareFile = (filePath: any, userId: String) => dispatch(actions.stopSharingFile(filePath, userId)); 

    //Accion para asignar el acceso a un amigo a un fichero en estado compartido
    const shareFileWithFriend = (fileId: String, friendId: String) => dispatch(actions.shareFileToFriend(fileId, friendId));
    const stopShareFileWithFriend = (fileId: String, friendId: String) => dispatch(actions.stopSharingFileToFriend(fileId, friendId));

    const handleShare = (fileId: String, friendId: String, checked: boolean) => {
        if (!checked) {
            //Si no esta en estado compartido, se comparte
            if (!props.file.shared)
                shareFile(props.file.key, user.identityId);

            shareFileWithFriend(user.identityId+fileId, friendId);
            if (!sharers.includes(friendId))
                sharers.push(friendId);
        } else {
            stopShareFileWithFriend(user.identityId+fileId, friendId);
            const index = sharers.indexOf(friendId);
            if (index > -1) {
                sharers.splice(index, 1);
            }
            if (sharers.length === 0) {
                //Esperamos un poco para evitar que salte un error por borrar antes el fichero compartido que el usuario que accede a dicho fichero
                var millisecondsToWait = 500;
                setTimeout(function() {
                    stopShareFile(props.file.key, user.identityId);
                }, millisecondsToWait);                
            }
            
        }
    }

    const [sharers, setSharers] = useState<any>([]); 

    useEffect(() => {
        async function fetchSharersFromFile() {
            const pivotTable: any = await API.graphql(graphqlOperation(Queries.getSharedFile, {id: user.identityId+props.file.key}));
            if (pivotTable.data.getSharedFile !== null) {
                const sharers: any[] = [];
                pivotTable.data.getSharedFile.Sharers.items.forEach(async(sharer: any, index: number) => {
                    const sharerDynamo: any = await API.graphql(graphqlOperation(Queries.getSharedFileToUser, {id: sharer.id}));
                    sharers.push(sharerDynamo.data.getSharedFileToUser.sharer.id);
                    if (index+1 === pivotTable.data.getSharedFile.Sharers.items.length)
                        setSharers(sharers);        
                });
            }      
        }
        fetchSharersFromFile();
    }, [props.file.key, user.identityId]);
    

    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar className="vertical-align">
                    <IonText className="custom-title">Compartir a amigos</IonText>
                    <IonItem button className="custom-button" lines="none" onClick={() => props.setShow(false)}>
                        <IonIcon icon={arrowDown} />
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            {
                (friends && friends.length > 0) ?
                friends.map((friend: any) => 
                <ShareFriend 
                    key={friend.id}
                    shared={sharers.includes(friend.originalId)} 
                    file={props.file} friend={friend} 
                    handleShare={handleShare}
                />
                ) 
                : <IonText className="no-notifications-text">No tienes amigos agregados.</IonText>
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalShareFriends;