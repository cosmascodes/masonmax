const Projects = () => {
  return (
    <section>
      <div class="mx-auto grid max-w-screen-xl px-4 py-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
        <div class="hidden md:col-span-6 md:mt-0 md:flex">
          <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">
            Projects we
            <br />
            have completed
          </h1>
        </div>
        <div class="content-center justify-self-start md:col-span-6 md:text-start">
          <div class="grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
            <article class="max-w-xs">
              <h2 class="mb-2 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">1029</a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                Building Project Completed
              </p>
            </article>
            <article class="max-w-xs">
              <h2 class="mb-2 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">709 </a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                Happy Customers
              </p>
            </article>
            <article class="max-w-xs">
              <h2 class="mb-2 text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">21</a>
              </h2>
              <p class="mb-4  text-gray-500 dark:text-gray-400">
                Years Experience
              </p>
            </article>
          </div>
          <a
            href="#"
            class="text-primary-700 py-2.5 text-center inline-flex items-center"
          >
            See all projects
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="mx-auto grid max-w-screen-xl px-4 pb-8 md:pb-16 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              class="rounded-lg h-80 object-cover"
              loading="lazy"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption class="absolute bg-white rounded-full px-4 text-sm py-1 text-primary-700 top-4 right-4">
            <p>Construction companies</p>
          </figcaption>
        </figure>
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              class="rounded-lg h-80 object-cover"
              loading="lazy"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption class="absolute bg-white rounded-full px-4 text-sm py-1 text-primary-700 top-4 right-4">
            <p>Individuals</p>
          </figcaption>
        </figure>
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              class="rounded-lg h-80 object-cover"
              loading="lazy"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption class="absolute bg-white rounded-full px-4 text-sm py-1 text-primary-700 top-4 right-4">
            <p>Construction companies</p>
          </figcaption>
        </figure>
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img
              class="rounded-lg h-80 object-cover"
              loading="lazy"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption class="absolute bg-white rounded-full px-4 text-sm py-1 text-primary-700 top-4 right-4">
            <p>Construction companies</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
