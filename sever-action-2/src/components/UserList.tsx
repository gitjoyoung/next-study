async function fetchUsers() {
  return await (await fetch("http://localhost:4000/users")).json();
}

export default async function UserList() {
  const users = await fetchUsers();
  return (
    <>
      <ul className="flex flex-col gap-4">
        {users.map((user: { id: string; name: string; email: string }) => (
          <li key={user.id} className="bg-white w-[300px] p-3 rounded-lg">
            <div>
              <h1 className="text-xl font-semibold">{user.name}</h1>
              <p>{user.email}</p>
              <div className="flex gap-4 justify-end">
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className="underline text-rose-500">삭제</button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
