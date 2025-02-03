type pageProps = {
  icon: React.ReactNode;
  value?: string;
  bgClassname: string;
};

const IconNotification = ({ icon, bgClassname }: pageProps) => {
  return (
    <div className="relative">
      {icon}
      <div
        className={`absolute top-0 -right-1 size-2 rounded-full ${bgClassname}`}
      />
    </div>
  );
};

export default IconNotification;
