"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

interface Chat {
  _id: string;
  chatName: string;
  messages: any[]; 
}

export default function Home() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null); 

  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        {/* <LeftSection setSelectedChat={setSelectedChat} /> */}
      </div>
      <div className={styles.rightOut}>
        <RightSection selectedChat={selectedChat} />
      </div>
    </div>
  );
}
