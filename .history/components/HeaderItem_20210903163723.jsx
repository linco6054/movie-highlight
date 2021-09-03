function HeaderItem({ title, Icon }) {
  return (
    <div>
      <Icon className="h-8 mb-1" />
      <p className="opacitytracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItem;
