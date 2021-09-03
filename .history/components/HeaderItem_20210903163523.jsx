function HeaderItem({ title, Icon }) {
  return (
    <div>
      <Icon className="h-8 m" />
      <p>{title}</p>
    </div>
  );
}

export default HeaderItem;
