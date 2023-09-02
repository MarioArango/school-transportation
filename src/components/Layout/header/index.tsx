"use client";
import Image from "next/image";
import logo from 'public/logo.png'
import "./index.scss";
import NextButton from "@/components/NextButton";

export default function Header() {
  return (
    <nav className="container-navigation gx-box-shadow-nav">
      <Image src={logo} alt="VanSchool"/>
      <div>
        <NextButton text="Iniciar Sesión" type="link" className="gx-text-base"/>
        <NextButton text="Registrate" type="primary"/>
      </div>
    </nav>
  )
}
