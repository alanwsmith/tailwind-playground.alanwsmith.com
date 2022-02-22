import HeadTag from '../../components/HeadTag'

export default function Page() {
  const prose_widths = [
    { id: 'text-xs', prop: '491px' },
    { id: 'text-sm', prop: '573px' },
    { id: 'text-base', prop: '655px' },
    { id: 'text-lg', prop: '736px' },
    { id: 'text-xl', prop: '812px' },
    { id: 'text-2xl', prop: '953px' },
    { id: 'text-3xl', prop: '1183px' },
    { id: 'text-4xl', prop: '1471px' },
    { id: 'text-5xl', prop: '1892px' },
    { id: 'text-6xl', prop: '2365px' },
    { id: 'text-7xl', prop: '2838px' },
    { id: 'text-8xl', prop: '3784px' },
    { id: 'text-9xl', prop: 'bigger than my monitor' },
  ]
  const basic_widths = [
    { id: 'max-w-xs', prop: '20rem', px: 320 },
    { id: 'max-w-sm', prop: '24rem', px: 384 },
    { id: 'max-w-md', prop: '28rem', px: 448 },
    { id: 'max-w-lg', prop: '32rem', px: 512 },
    { id: 'max-w-xl', prop: '36rem', px: 576 },
    { id: 'max-w-2xl', prop: '42rem', px: 672 },
    { id: 'max-w-3xl', prop: '48rem', px: 768 },
    { id: 'max-w-4xl', prop: '56rem', px: 896 },
    { id: 'max-w-5xl', prop: '64rem', px: 1024 },
    { id: 'max-w-6xl', prop: '72rem', px: 1152 },
    { id: 'max-w-7xl', prop: '80rem', px: 1280 },
  ]

  const screen_widths = [
    { id: 'max-w-screen-sm', prop: '640px' },
    { id: 'max-w-screen-md', prop: '768px' },
    { id: 'max-w-screen-lg', prop: '1024px' },
    { id: 'max-w-screen-xl', prop: '1280px' },
    { id: 'max-w-screen-2xl', prop: '1536px' },
  ]

  return (
    <>
      <HeadTag
        description="Example sizes of the maximum width (max-w) Tailwind CSS setting"
        image="https://tailwind-playground.alanwsmith.com/og-images/main.png"
        title="max-w Tainwind CSS Size Examples"
        type="article"
        url="https://tailwind-playground.alanwsmith.com/max-widths"
      />
      <main className="ml-2">
        <h1 className="text-3xl font-bold pb-1 mt-8 mb-6 border-b border-gray-600">
          Max Widths - Centered
        </h1>

        <ul className="list-disc pl-5 pb-2 max-w-prose">
          <li>
            This is the same thing as the other max widths page, but the
            examples are centered.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 text-center">Basic Widths</h2>

        {basic_widths.map((width) => (
          <div key={width.id} className={`${width.id} border-b mt-6 mx-auto`}>
            {width.id} - ({width.prop} - {width.px}px)
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 text-center">Screen Widths</h2>

        {screen_widths.map((width) => (
          <div key={width.id} className={`${width.id} border-b mt-6 mx-auto`}>
            {width.id} ({width.prop})
          </div>
        ))}

        <h2 className="text-2xl font-bold mt-10 text-center">Prose Widths</h2>

        {prose_widths.map((width) => (
          <div
            key={width.id}
            className={`max-w-prose ${width.id} border-b mt-6 mx-auto`}
          >
            <div className="text-base">
              {width.id} - ({width.prop})
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
