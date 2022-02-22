import HeadTag from '../components/HeadTag'

export default function Page() {
  return (
    <>
      <HeadTag
        description="Testing response images with srcset in Tailwind CSS"
        image="https://tailwind-playground.alanwsmith.com/og-images/main.png"
        title="Responsive Tailwind CSS Images"
        type="article"
        url="https://tailwind-playground.alanwsmith.com/responsive-tailwind-image-calls"
      />
      <main className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold pb-1 mb-6 border-b border-gray-600">
          Rsponsive Tailwind Image Calls
        </h1>
        <p>
          Secondly. It appears that the same active and leading members of the
          council had been active and influential members of the legislative and
          executive branches, within the period to be reviewed; and even patrons
          or opponents of the very measures to be thus brought to the test of
          the constitution. Two of the members had been vice-presidents of the
          State, and several other members of the executive council, within the
          seven preceding years. One of them had been speaker, and a number of
          others distinguished members, of the legislative assembly within the
          same period.
        </p>
        <img
          width="640"
          srcset="
        /images/sample-1--640x80.png 640w,
        /images/sample-1--1280x160.png 1280w
          "
          sizes="640px, 1280px"
          src="/images/sample-1--1280x160.png 1280w"
        />

        <img
          width="640"
          srcset="
        /images/sample-2--640x80.png 640w,
        /images/sample-2--1280x160.png 1280w
          "
          sizes="640px, 1280px"
          src="/images/sample-2--1280x160.png 1280w"
        />

        <p>
          Thirdly. Every page of their proceedings witnesses the effect of all
          these circumstances on the temper of their deliberations. Throughout
          the continuance of the council, it was split into two fixed and
          violent parties. The fact is acknowledged and lamented by themselves.
          Had this not been the case, the face of their proceedings exhibits a
          proof equally satisfactory. In all questions, however unimportant in
          themselves, or unconnected with each other, the same names stand
          invariably contrasted on the opposite columns. Every unbiased observer
          may infer, without danger of mistake, and at the same time without
          meaning to reflect on either party, or any individuals of either
          party, that, unfortunately, PASSION, not REASON, must have presided
          over their decisions. When men exercise their reason coolly and freely
          on a variety of distinct questions, they inevitably fall into
          different opinions on some of them. When they are governed by a common
          passion, their opinions, if they are so to be called, will be the
          same.
        </p>

        <p>
          Fourthly. It is at least problematical, whether the decisions of this
          body do not, in several instances, misconstrue the limits prescribed
          for the legislative and executive departments, instead of reducing and
          limiting them within their constitutional places.
        </p>
      </main>
    </>
  )
}
