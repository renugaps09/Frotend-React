function FormPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>

      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border mb-3"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-3"
      />
      <button className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>
    </div>
  );
}

export default FormPage;
