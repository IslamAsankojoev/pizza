export default function Categories({ items, id, setId }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            setId(0);
          }}
          className={id === 0 ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={id === index + 1 ? 'active' : ''}
                onClick={() => {
                  setId(index + 1);
                }}
                key={index + 1}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
