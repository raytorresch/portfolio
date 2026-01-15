export default function Contact() {
  return (
    <section className="py-32 border-t border-gray-800">
      <h2 className="text-3xl font-bold">Let’s work together</h2>
      <p className="mt-4 text-gray-400">
        Email: <a href="mailto:ray.torres.dev@gmail.com" className="text-white">ray.torres.dev@gmail.com</a>
      </p>
      <p className="mt-2 text-gray-400">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ray-torres-4004b0153/"
          target="_blank"
          className="text-white"
        >
          ray-torres
        </a>
      </p>
      <p className="mt-2 text-gray-400">
        Upwork:{" "}
        <a 
            href="https://www.upwork.com/freelancers/~011d1809efcaa7da80"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white">
          View profile
        </a>
      </p>
    </section>
  )
}