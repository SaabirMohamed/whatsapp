import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  //sender or receiver
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  //   console.log(message.timeStamp);
  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <TimeStamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </TimeStamp>
      </TypeOfMessage>
    </Container>
  );
};

export default Message;

const Container = styled.div``;
const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Receiver = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;

const TimeStamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  text-align: right;
  right: 0;
  bottom: 0;
`;
