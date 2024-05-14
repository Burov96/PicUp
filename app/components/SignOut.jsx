function SignOut() {
  return (
    <form action="/auth/signout" method="post">
      <button type="submit" className="text-white hover:text-indigo-600">
        Sign Out
      </button>
    </form>
  );
}

export default SignOut;
