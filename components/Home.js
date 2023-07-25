import Head from "next/head";
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from "@/components/Footer";
import ReportTable from "@/components/ReportTable";
import { useState } from "react";

export default function Home (){
    const [form, setForm] = useState([])



  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <Main setForm= {setForm}  form = {form}/>
      {form.length!=0?<ReportTable form={form} setForm= {setForm}/>:<p>Report table coming soon ...</p>}
      
      <Footer form={form.length} />

    </>
  )
}