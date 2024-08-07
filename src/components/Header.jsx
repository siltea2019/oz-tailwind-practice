export default function Header() {
  return (
    <header className="header-container flex justify-between items-center px-2.5 py-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="menu-container flex justify-center items-center gap-20">
        <li className="list-none font-normal text-sm/[13px]">로그인</li>
        <li className="list-none font-normal text-sm/[13px]">회원가입</li>
        <li className="list-none font-normal text-sm/[13px]">내클래스</li>
      </ul>
    </header>
  );
}
