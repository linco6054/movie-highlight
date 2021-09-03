function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex items-center cu flex-col">
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100  tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
