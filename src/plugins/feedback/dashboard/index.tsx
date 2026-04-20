import { defineDashboardExtension, Page, PageBlock, PageLayout, PageTitle } from '@vendure/dashboard';

export default defineDashboardExtension({
    routes: [
        {
            path: '/feedback',
            loader: () => ({ breadcrumb: 'Retroalimentación' }),
            navMenuItem: {
                id: 'feedback',
                title: 'Retroalimentación',
                sectionId: 'settings',
            },
            component: FeedbackPage,
        },
    ],
});

function FeedbackPage() {

    return (
        <Page>
            <PageTitle>Retroalimentación</PageTitle>
            <PageLayout>
                <PageBlock column="main">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc-SVGQIkUJ9BXQLVPt06qfRzHORwAkwQsL7tQnENWioC55uw/viewform?embedded=true"
                        width="100%"
                        height="900"
                        style={{ border: 'none', borderRadius: '8px' }}
                        title="Formulario de retroalimentación"
                    >
                        Cargando formulario…
                    </iframe>
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
