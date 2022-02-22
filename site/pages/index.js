import HeadTag from '../components/HeadTag'

export default function HomePage() {
  return (
    <>
      <HeadTag
        description="A Tailwind playground built by Alan W. Smith"
        image="https://tailwind-playground.alanwsmith.com/og-images/main.png"
        title="Tailwind Playground - Alan W. Smith"
        type="website"
        url="https://tailwind-playground.alanwsmith.com/"
      />
      <main className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold pb-1 mb-6 border-b border-gray-600">
          Tailwind Playground
        </h1>
        <ul className="text-lg">
          <li>
            This is my space to toy around with Tailwind to experiment with it
            and see how it works.
          </li>
          <li>
            The only global settings area `bg-gray-800` and `text-blue-200`.
            Everything else is done directly each page.
          </li>
          <li>This page has a `main` wrapper with `max-w-3xl mx-auto mt-10`</li>
          <li>
            The header is: `text-3xl font-bold pb-1 mb-6 border-b
            border-gray-600`
          </li>
        </ul>
      </main>
    </>
  )
}
