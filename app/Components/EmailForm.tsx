"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface EmailFormProps {
  subjectDefault?: string;
  bodyDefault?: string;
  logoSrc: string;
}

export default function EmailForm({
  subjectDefault = "Your subject here",
  bodyDefault = "Write your message...",
  logoSrc,
}: EmailFormProps) {
  const [subject, setSubject] = useState(subjectDefault);
  const [body, setBody] = useState(bodyDefault);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ subject, body });
    alert("Email sent!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e9ecf1] p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-8"
      >
        <div className="mb-6">
          <Image
            src={logoSrc}
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{color:"black"}}

              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6c8cff] transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email Body
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              style={{color:"black"}}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6c8cff] transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 mt-2 bg-[#6c8cff] text-white font-semibold rounded-lg shadow-md hover:bg-[#5a7cff] transition"
          >
            Send Email
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
