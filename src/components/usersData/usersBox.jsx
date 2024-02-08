import '../../css/userBox.css'

export default function UserBox( {username, name, lastname, email, salary, movies} ) {
  return (
    <div>
      <article className='big-container'>
        <h3 className="user-username">{username}</h3>
        <div className="user-info">
          <p className="user-name">{name}</p>
          <p className="user-lastname">{lastname}</p>
          <p className="user-email">{email}</p>
          {salary && <p className="user-salary">{salary}</p>}
          {movies && <p className="user-movies">{movies}</p>}
        </div>
      </article>
    </div>
  );
}