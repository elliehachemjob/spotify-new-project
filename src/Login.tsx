import React, { FC } from "react";
//space is %20
//word wrap
//alt z
//?after endpoint for our params
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

interface IProps {}

/**
 * @author
 * @function @
 **/

export const Login: FC<IProps> = (props) => {
  return <div></div>;
};
