import CallList from './CallList/CallList';
import IncomingCall from './IncomingCall/IncomingCall';

const showCallList = true;

const Call = () => {
  return showCallList ? <CallList /> : <IncomingCall />;
};

export default Call;
