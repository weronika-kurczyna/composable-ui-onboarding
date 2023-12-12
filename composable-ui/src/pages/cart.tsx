import { GetStaticProps } from 'next'
import { createServerApp } from 'server/isr/server-app'
import { CartPage } from 'components/cart'

export const getStaticProps: GetStaticProps = async (context) => {
  const { ssg } = await createServerApp({ context })
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  }
}
export default CartPage
