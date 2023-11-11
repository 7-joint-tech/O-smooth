import { FAQ as QUESTION_ANSWER } from "./FAQ2";
import Navbar from "../Navbar/Navbar";

import EachFAQ from "./FAQ_Function";

const FAQ = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center mt-24 p-4">
      {QUESTION_ANSWER.map((faq) => (
        <EachFAQ key={faq.id} faq={faq} />
      ))}
    </div>
    </div>
  );
};

export default FAQ;
