import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (token && email) {
      const decodedEmail = decodeURIComponent(email).toLowerCase();

      axios
        .get(
          `http://localhost:5000/api/auth/verify-email?token=${token}&email=${decodedEmail}`
        )
        .then((res) => {
          setMessage(res.data);

          // Redirect after 3 seconds
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
          setMessage("❌ Verification failed. Please signup again.");
        });
    } else {
      setMessage("Invalid verification link.");
    }
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message}</h2>
    </div>
  );
}

export default VerifyEmailPage;