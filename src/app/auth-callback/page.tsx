import Search from "./search";
import { Suspense } from "react";

const Page = () =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  )
}

export default Page;