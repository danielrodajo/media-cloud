import { useRef, useEffect } from "react";

export function useIsMountedRef(){
    const isMountedRef: any = useRef(null);
    useEffect(() => {
      isMountedRef.current = true;
      return () => {isMountedRef.current = false;}
    });
    return isMountedRef;
  }