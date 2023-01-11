import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {set_data } from "./store/emailSlice";

function App() {

  const dispatch = useDispatch()



  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('https://flipkart-email-mock.vercel.app/');
      const json = await response.json();

      const updatedJson = json.list.map((item) => {
        console.log(item.subject);
        item['unread'] = false;
        item['read'] = false;
        item['favorites'] = false;
        return item;
      });
      if (response.ok) {
        dispatch(set_data(updatedJson))
        // dispatch({ type: 'set_data', payload: json });
        console.log("JSON",updatedJson);
        console.log(data);
      }

    }
    fetchEmails();
    

  }, [dispatch]);

  const { data } = useSelector((state) => {
    return {
      data: state.email.data,
    }
  });

  console.log("i am data", data);

  return (
    <div className="">
      <p className="text-primary">TailwindsCSS added.</p>
    </div>
  );
}

export default App;
