import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";

const page = () => {
  const session = getServerSession(authOptions);
  console.log("userinfo hgjkhjkhkljkljkkkll", session);

  return (
    <div>
      <h2> profile page</h2>
    </div>
  );
};

export default page;
