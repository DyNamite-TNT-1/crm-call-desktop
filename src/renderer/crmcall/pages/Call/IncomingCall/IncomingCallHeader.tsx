import HanAnimationIncomingIcon from '@renderer/crmcall/components/AnimationIcon/HanAnimationIcon';

const IncomingCallHeader = () => {
  return (
    <div className="h-flex-col h-items-center h-rgap-12 h-py-16">
      <HanAnimationIncomingIcon />
      <div>Incoming Call</div>
    </div>
  );
};

export default IncomingCallHeader;
