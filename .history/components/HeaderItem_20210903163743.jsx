function HeaderItem({ title, Icon }) {
  return (
    <div>
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 hover:op tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItem;
