import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInputVal } from "@/app/redux/features/authSlice";

function NavbarSearchInput({ style, placeholder, }) {
  const inputValue = useSelector(state => state.auth.setSearchInputVal);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleSearchChange = (e) => {
    push('/projects');
    let value = e.target.value.slice(0, 35);
    dispatch(setSearchInputVal(value));
  }

  return (
    <input type="search" onChange={handleSearchChange} value={inputValue} className={style.headerInput} placeholder={placeholder} />
  )
}
export default NavbarSearchInput;