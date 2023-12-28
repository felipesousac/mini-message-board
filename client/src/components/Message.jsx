const Message = () => {
  return (
    <div class="pt-3">
      <p class="pb-3 mb-0 small lh-125 border-bottom border-gray border-b border-gray-200">
        <div className="flex items-center justify-between">
          <strong class="text-gray-500 block">@username</strong>
          <span className="text-xs text-gray-400 block">01/12/1997</span>
        </div>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus.
      </p>
    </div>
  );
};

export default Message;
