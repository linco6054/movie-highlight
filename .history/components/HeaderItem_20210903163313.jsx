function HeaderItem({ title, Icon }) {
  return (
    <div >
      <Icon className="h" />
      <p>{title}</p>
    </div>
  );
}

export default HeaderItem;
