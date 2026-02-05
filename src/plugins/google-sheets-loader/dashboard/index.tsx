import {
    Button,
    defineDashboardExtension,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
} from '@vendure/dashboard';
import { useState } from 'react';

defineDashboardExtension({
    routes: [
        {
            path: '/google-sheets-loader',
            loader: () => ({ breadcrumb: 'Google Sheets Loader' }),
            navMenuItem: {
                id: 'google-sheets-loader',
                title: 'Google Sheets Loader',
                sectionId: 'catalog',
            },
            component: () => {
                const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
                const [message, setMessage] = useState<string>('');

                const handleLoadData = async () => {
                    setStatus('loading');
                    try {
                        // TODO: Implement the actual data loading logic
                        // Call your GraphQL mutation or API endpoint here
                        setMessage('Data loaded successfully from Google Sheet');
                        setStatus('success');
                    } catch (error) {
                        setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
                        setStatus('error');
                    }
                };

                return (
                    <Page pageId="google-sheets-loader-page">
                        <PageTitle>Google Sheets Loader</PageTitle>
                        <PageLayout>
                            <PageBlock column="main" blockId="google-sheets-loader-main">
                                <div>
                                    <h2 className="mb-4">Load Data from Google Sheet</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Click the button below to load data from your configured Google Sheet.
                                    </p>
                                    <Button
                                        onClick={handleLoadData}
                                        disabled={status === 'loading'}
                                        variant={status === 'success' ? 'default' : status === 'error' ? 'destructive' : 'default'}
                                    >
                                        {status === 'loading' ? 'Loading...' : 'Load Data from Sheet'}
                                    </Button>
                                    {message && (
                                        <div className={`mt-4 p-4 rounded ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {message}
                                        </div>
                                    )}
                                </div>
                            </PageBlock>
                        </PageLayout>
                    </Page>
                );
            },
        },
    ],
    pageBlocks: [
    ],
    navSections: [],
    actionBarItems: [],
    alerts: [],
    widgets: [],
    customFormComponents: {},
    dataTables: [],
    detailForms: [],
    login: {},
    historyEntries: [],
});
