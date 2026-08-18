import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import {useEffect} from 'react'
import { useAuth } from "../store/authStore";



function RootLayout() {

  //import check checkAuth
  let checkAuth=useAuth(state=>state.checkAuth)

  useEffect(()=>{
    checkAuth()
  },[checkAuth])


  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Header />
        <main className="min-h-[calc(100vh-72px)]">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
