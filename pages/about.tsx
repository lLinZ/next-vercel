import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
    return (
        <>
            <h1>About page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/contact">Contact</Link>
            </h1>
            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}
AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout >
    )
}