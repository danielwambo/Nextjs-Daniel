import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white"> {/* Set background to white */}
      <div className="container">
        <h className="navbar-brand">
          <img src="https://www.testvalley.kr/logo/logo-new.svg" alt="Test Valley Logo" width="auto" height="30" />
        </h>
        <h className="navbar-brand">카테고리</h>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mx-auto">
            <div className="input-group">
              <span className="input-group-text"><BiSearch /></span>
              <input
                className="form-control me-2"
                type="search"
                placeholder="살까 말까 고민 중이시라면,"
                aria-label="Search"
              />
            </div>
          </form>
          <div className="ml-auto mr-3"> {/* Add margin-right */}
            <Image
              src="https://www.testvalley.kr/common/home-event.svg"
              alt="Icon"
              width={30}
              height={30}
            />
          </div>
          <h>로그인 / 회원가입</h>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
