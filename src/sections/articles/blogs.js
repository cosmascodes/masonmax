const Blogs = () => {
  return (
    <div>
      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Our Blogs
          </h2>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article class="max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img
                  src="/assets/concrete.jpg"
                  loading="lazy"
                  class="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Concrete Block Benefits</a>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                Concrete blocks offer durability, cost-effectiveness, and energy
                efficiency for various construction needs.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article class="max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img
                  src="/assets/type.webp"
                  class="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Choosing the Right Blocks</a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                Choosing the right blocks depends on load-bearing capacity,
                climate conditions, durability, and aesthetic preferences.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </a>
            </article>
            <article class="max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img
                  src="/assets/innovation.webp"
                  class="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#"> Materials and Innovations</a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                New advancements in materials improve strength, sustainability,
                and efficiency in modern construction projects.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article class="max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  class="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Eco Building</a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                Eco-friendly construction practices use sustainable materials
                and methods to reduce environmental impact significantly.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blogs;
