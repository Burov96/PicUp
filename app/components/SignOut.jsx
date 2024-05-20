function SignOut() {
  return (
    <form action="/auth/signout" method="post">
      <button type="submit" className="text-white font-semibold text-xl">
        Sign Out
      </button>
    </form>
  );
}

export default SignOut;
