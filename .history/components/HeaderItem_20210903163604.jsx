function HeaderItem({ title, Icon }) {
  return (
    <div>
      <Icon className="h-8 mb-1" />
      <p className="trackin">{title}</p>
    </div>
  );
}

export default HeaderItem;
