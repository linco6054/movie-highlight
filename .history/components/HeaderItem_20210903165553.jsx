function HeaderItem({ title, Icon }) {
  return (
    <div className="w-12 group flex items-center cursor-pointer flex-col sm ">
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100  tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
