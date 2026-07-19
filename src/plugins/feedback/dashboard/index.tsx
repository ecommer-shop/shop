import { useState } from 'react';
import {
    api,
    Badge,
    Button,
    Card,
    CardContent,
    defineDashboardExtension,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Input,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
} from '@vendure/dashboard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Check, MessageSquare, Pencil, Pin, Plus, Send, ThumbsDown, ThumbsUp, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import { useIsSuperAdmin } from '../../superadminvisibility/dashboard/hooks';

type VoteValue = 'ok' | 'not_ok';
type PostStatus = 'under_review' | 'planned' | 'in_progress' | 'done' | 'declined';

interface FeedbackPost {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    category: string;
    status: PostStatus;
    prioritized: boolean;
    adminNote: string | null;
    authorName: string;
    okVotes: number;
    notOkVotes: number;
    myVote: VoteValue | null;
    commentCount: number;
    mine: boolean;
}

interface FeedbackComment {
    id: string;
    createdAt: string;
    authorName: string;
    text: string;
    mine: boolean;
}

const POST_FRAGMENT = `
    id
    createdAt
    title
    description
    category
    status
    prioritized
    adminNote
    authorName
    okVotes
    notOkVotes
    myVote
    commentCount
    mine
`;

const GET_POSTS = `query GetFeedbackPosts { feedbackPosts { ${POST_FRAGMENT} } }`;
const GET_COMMENTS = `query GetFeedbackComments($postId: ID!) {
    feedbackComments(postId: $postId) { id createdAt authorName text mine }
}`;
const CREATE_POST = `mutation CreateFeedbackPost($input: CreateFeedbackPostInput!) {
    createFeedbackPost(input: $input) { ${POST_FRAGMENT} }
}`;
const VOTE_POST = `mutation VoteFeedbackPost($postId: ID!, $value: FeedbackVoteValue!) {
    voteFeedbackPost(postId: $postId, value: $value) { ${POST_FRAGMENT} }
}`;
const ADD_COMMENT = `mutation AddFeedbackComment($postId: ID!, $text: String!) {
    addFeedbackComment(postId: $postId, text: $text) { id createdAt authorName text mine }
}`;
const UPDATE_POST = `mutation UpdateFeedbackPost($postId: ID!, $input: UpdateFeedbackPostInput!) {
    updateFeedbackPost(postId: $postId, input: $input) { ${POST_FRAGMENT} }
}`;
const UPDATE_COMMENT = `mutation UpdateFeedbackComment($commentId: ID!, $text: String!) {
    updateFeedbackComment(commentId: $commentId, text: $text) { id createdAt authorName text mine }
}`;
const DELETE_COMMENT = `mutation DeleteFeedbackComment($commentId: ID!) { deleteFeedbackComment(commentId: $commentId) }`;
const SET_STATUS = `mutation SetFeedbackPostStatus($postId: ID!, $status: FeedbackPostStatus!) {
    setFeedbackPostStatus(postId: $postId, status: $status) { ${POST_FRAGMENT} }
}`;
const SET_PRIORITY = `mutation SetFeedbackPostPriority($postId: ID!, $prioritized: Boolean!) {
    setFeedbackPostPriority(postId: $postId, prioritized: $prioritized) { ${POST_FRAGMENT} }
}`;
const DELETE_POST = `mutation DeleteFeedbackPost($postId: ID!) { deleteFeedbackPost(postId: $postId) }`;

function unwrap<T>(result: any): T {
    return (result?.data ?? result) as T;
}

function applyVoteLocally(post: FeedbackPost, value: VoteValue): FeedbackPost {
    let { okVotes, notOkVotes, myVote } = post;
    if (myVote === 'ok') okVotes--;
    if (myVote === 'not_ok') notOkVotes--;
    if (myVote === value) {
        myVote = null;
    } else {
        myVote = value;
        if (value === 'ok') okVotes++;
        else notOkVotes++;
    }
    return { ...post, okVotes, notOkVotes, myVote };
}

const STATUS_META: Record<PostStatus, { label: string; className: string }> = {
    under_review: { label: 'En revisión', className: 'bg-muted text-muted-foreground' },
    planned: { label: 'Planificada', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
    in_progress: { label: 'En progreso', className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
    done: { label: 'Completada', className: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' },
    declined: { label: 'Descartada', className: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
};

const CATEGORY_LABELS: Record<string, string> = {
    feature: 'Funcionalidad',
    improvement: 'Mejora',
    bug: 'Error',
    other: 'Otro',
};

const STATUS_ORDER: PostStatus[] = ['in_progress', 'planned', 'under_review', 'done', 'declined'];

export default defineDashboardExtension({
    routes: [
        {
            path: '/cocreativo',
            loader: () => ({ breadcrumb: 'Cocreativo' }),
            navMenuItem: {
                id: 'feedback',
                title: 'Cocreativo',
                sectionId: 'settings',
            },
            component: FeedbackPage,
        },
    ],
});

function FeedbackPage() {
    const isSuperAdmin = useIsSuperAdmin() === true;
    const { data: posts, isLoading } = useQuery({
        queryKey: ['feedbackPosts'],
        queryFn: () => api.query(GET_POSTS).then(r => unwrap<{ feedbackPosts: FeedbackPost[] }>(r).feedbackPosts),
    });

    const prioritized = (posts ?? []).filter(p => p.prioritized);
    const byStatus = STATUS_ORDER.map(status => ({
        status,
        items: (posts ?? [])
            .filter(p => !p.prioritized && p.status === status)
            .sort((a, b) => (b.okVotes - b.notOkVotes) - (a.okVotes - a.notOkVotes)),
    })).filter(group => group.items.length > 0);

    return (
        <Page pageId="feedback">
            <PageTitle>Cocreativo</PageTitle>
            <PageLayout>
                <PageBlock column="main" blockId="feedback-board">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-muted-foreground">
                            Cocrea la plataforma con nosotros: propón ideas y vota las de otros
                            vendedores. Las más votadas y las priorizadas por Ecommer definen el roadmap.
                        </p>
                        <NewPostDialog />
                    </div>

                    {isLoading && (
                        <div className="flex justify-center py-12">
                            <Spinner />
                        </div>
                    )}

                    {!isLoading && (posts ?? []).length === 0 && (
                        <Card>
                            <CardContent className="py-12 text-center text-muted-foreground">
                                Aún no hay ideas publicadas. Sé el primero en proponer una.
                            </CardContent>
                        </Card>
                    )}

                    {!isLoading && (posts ?? []).length > 0 && (
                        <Tabs defaultValue="board">
                            <TabsList className="mb-4">
                                <TabsTrigger value="board">Tablero</TabsTrigger>
                                <TabsTrigger value="table">Tabla</TabsTrigger>
                            </TabsList>

                            <TabsContent value="board">
                                {prioritized.length > 0 && (
                                    <section className="mb-8">
                                        <h2 className="flex items-center gap-2 text-sm font-medium mb-3">
                                            <Pin className="h-4 w-4" />
                                            Priorizadas por Ecommer
                                        </h2>
                                        <div className="space-y-3">
                                            {prioritized.map(post => (
                                                <PostCard key={post.id} post={post} isSuperAdmin={isSuperAdmin} />
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {byStatus.map(group => (
                                    <section key={group.status} className="mb-8">
                                        <h2 className="text-sm font-medium mb-3">
                                            {STATUS_META[group.status].label}
                                            <span className="ml-2 text-muted-foreground">{group.items.length}</span>
                                        </h2>
                                        <div className="space-y-3">
                                            {group.items.map(post => (
                                                <PostCard key={post.id} post={post} isSuperAdmin={isSuperAdmin} />
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </TabsContent>

                            <TabsContent value="table">
                                <RoadmapTable posts={posts ?? []} />
                            </TabsContent>
                        </Tabs>
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}

function RoadmapTable({ posts }: { posts: FeedbackPost[] }) {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const term = search.trim().toLowerCase();
    const filtered = posts
        .filter(post => statusFilter === 'all' || post.status === statusFilter)
        .filter(post => categoryFilter === 'all' || post.category === categoryFilter)
        .filter(
            post =>
                !term ||
                post.title.toLowerCase().includes(term) ||
                post.description.toLowerCase().includes(term) ||
                post.authorName.toLowerCase().includes(term),
        )
        .sort((a, b) => {
            if (a.prioritized !== b.prioritized) return a.prioritized ? -1 : 1;
            return (b.okVotes - b.notOkVotes) - (a.okVotes - a.notOkVotes);
        });

    return (
        <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <Input
                    placeholder="Buscar por título, descripción o autor"
                    className="max-w-xs"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        {Object.entries(STATUS_META).map(([value, meta]) => (
                            <SelectItem key={value} value={value}>
                                {meta.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-44">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                                {label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <span className="text-xs text-muted-foreground ml-auto">
                    {filtered.length === 1 ? '1 idea' : `${filtered.length} ideas`}
                </span>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Idea</TableHead>
                                <TableHead>Categoría</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-center">
                                    <ThumbsUp className="h-3.5 w-3.5 inline" aria-label="Votos a favor" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <ThumbsDown className="h-3.5 w-3.5 inline" aria-label="Votos en contra" />
                                </TableHead>
                                <TableHead className="text-center">
                                    <MessageSquare className="h-3.5 w-3.5 inline" aria-label="Comentarios" />
                                </TableHead>
                                <TableHead>Autor</TableHead>
                                <TableHead>Fecha</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center text-muted-foreground py-8">
                                        Ninguna idea coincide con los filtros.
                                    </TableCell>
                                </TableRow>
                            )}
                            {filtered.map(post => (
                                <TableRow key={post.id}>
                                    <TableCell className="max-w-64">
                                        <span className="flex items-center gap-1.5 font-medium">
                                            {post.prioritized && (
                                                <Pin className="h-3.5 w-3.5 text-primary shrink-0" aria-label="Priorizada" />
                                            )}
                                            <span className="truncate">{post.title}</span>
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">
                                            {CATEGORY_LABELS[post.category] ?? post.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={`border-transparent ${STATUS_META[post.status].className}`}>
                                            {STATUS_META[post.status].label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center font-medium">{post.okVotes}</TableCell>
                                    <TableCell className="text-center text-muted-foreground">{post.notOkVotes}</TableCell>
                                    <TableCell className="text-center text-muted-foreground">{post.commentCount}</TableCell>
                                    <TableCell className="text-muted-foreground">{post.authorName}</TableCell>
                                    <TableCell className="text-muted-foreground whitespace-nowrap">
                                        {new Date(post.createdAt).toLocaleDateString('es-CO')}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

interface PostFormValues {
    title: string;
    description: string;
    category: string;
}

function PostFormDialog({
    open,
    onOpenChange,
    dialogTitle,
    dialogDescription,
    submitLabel,
    initial,
    pending,
    onSubmit,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    dialogTitle: string;
    dialogDescription: string;
    submitLabel: string;
    initial: PostFormValues;
    pending: boolean;
    onSubmit: (values: PostFormValues) => void;
}) {
    const [title, setTitle] = useState(initial.title);
    const [category, setCategory] = useState(initial.category);
    const [description, setDescription] = useState(initial.description);

    const canSubmit = title.trim().length > 2 && description.trim().length > 2;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>{dialogDescription}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        placeholder="Título corto de la idea"
                        value={title}
                        maxLength={200}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Textarea
                        placeholder="Cuéntanos más: ¿qué problema resuelve? ¿cómo te ayudaría?"
                        rows={5}
                        maxLength={5000}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <Button
                        onClick={() => onSubmit({ title, description, category })}
                        disabled={!canSubmit || pending}
                    >
                        {submitLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function NewPostDialog() {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const [formKey, setFormKey] = useState(0);

    const createMutation = useMutation({
        mutationFn: (values: PostFormValues) => api.mutate(CREATE_POST, { input: values }),
        onSuccess: () => {
            toast.success('Idea publicada');
            queryClient.invalidateQueries({ queryKey: ['feedbackPosts'] });
            setOpen(false);
            setFormKey(k => k + 1);
        },
        onError: () => toast.error('No se pudo publicar la idea'),
    });

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                <Plus className="h-4 w-4 mr-1" />
                Nueva idea
            </Button>
            <PostFormDialog
                key={formKey}
                open={open}
                onOpenChange={setOpen}
                dialogTitle="Proponer una idea"
                dialogDescription="Describe qué te gustaría que mejoremos o agreguemos a la plataforma."
                submitLabel="Publicar idea ✨"
                initial={{ title: '', description: '', category: 'feature' }}
                pending={createMutation.isPending}
                onSubmit={values => createMutation.mutate(values)}
            />
        </>
    );
}

function PostCard({ post, isSuperAdmin }: { post: FeedbackPost; isSuperAdmin: boolean }) {
    const queryClient = useQueryClient();
    const [showComments, setShowComments] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const invalidatePosts = () => queryClient.invalidateQueries({ queryKey: ['feedbackPosts'] });

    const updateMutation = useMutation({
        mutationFn: (values: PostFormValues) =>
            api.mutate(UPDATE_POST, { postId: post.id, input: values }),
        onSuccess: () => {
            toast.success('Idea actualizada');
            invalidatePosts();
            setEditOpen(false);
        },
        onError: () => toast.error('No se pudo actualizar la idea'),
    });

    const voteMutation = useMutation({
        mutationFn: (value: VoteValue) => api.mutate(VOTE_POST, { postId: post.id, value }),
        onMutate: async (value: VoteValue) => {
            await queryClient.cancelQueries({ queryKey: ['feedbackPosts'] });
            const previous = queryClient.getQueryData<FeedbackPost[]>(['feedbackPosts']);
            queryClient.setQueryData<FeedbackPost[]>(['feedbackPosts'], old =>
                (old ?? []).map(p => (p.id === post.id ? applyVoteLocally(p, value) : p)),
            );
            return { previous };
        },
        onSuccess: result => {
            const updated = unwrap<{ voteFeedbackPost: FeedbackPost }>(result).voteFeedbackPost;
            queryClient.setQueryData<FeedbackPost[]>(['feedbackPosts'], old =>
                (old ?? []).map(p => (p.id === updated.id ? { ...p, ...updated } : p)),
            );
        },
        onError: (_err, _value, context) => {
            if (context?.previous) {
                queryClient.setQueryData(['feedbackPosts'], context.previous);
            }
            toast.error('No se pudo registrar tu voto');
        },
    });

    const statusMutation = useMutation({
        mutationFn: (status: PostStatus) => api.mutate(SET_STATUS, { postId: post.id, status }),
        onSuccess: () => {
            toast.success('Estado actualizado');
            invalidatePosts();
        },
        onError: () => toast.error('No se pudo cambiar el estado'),
    });

    const priorityMutation = useMutation({
        mutationFn: (prioritized: boolean) =>
            api.mutate(SET_PRIORITY, { postId: post.id, prioritized }),
        onSuccess: () => {
            toast.success(post.prioritized ? 'Prioridad retirada' : 'Idea priorizada');
            invalidatePosts();
        },
        onError: () => toast.error('No se pudo cambiar la prioridad'),
    });

    const deleteMutation = useMutation({
        mutationFn: () => api.mutate(DELETE_POST, { postId: post.id }),
        onSuccess: () => {
            toast.success('Idea eliminada');
            invalidatePosts();
        },
        onError: () => toast.error('No se pudo eliminar la idea'),
    });

    const statusMeta = STATUS_META[post.status];
    const okActive = post.myVote === 'ok';
    const notOkActive = post.myVote === 'not_ok';
    const canManage = post.mine || isSuperAdmin;

    return (
        <Card>
            <CardContent className="flex gap-4 py-4">
                <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Me sirve"
                            className={`h-9 w-9 rounded-full ${
                                okActive
                                    ? 'bg-primary/10 text-primary border-primary/50 hover:bg-primary/20 hover:text-primary'
                                    : 'text-muted-foreground'
                            }`}
                            onClick={() => voteMutation.mutate('ok')}
                        >
                            <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className={`text-sm font-medium min-w-5 ${okActive ? 'text-primary' : ''}`}>
                            {post.okVotes}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="No me sirve"
                            className={`h-9 w-9 rounded-full ${
                                notOkActive
                                    ? 'bg-destructive/10 text-destructive border-destructive/50 hover:bg-destructive/20 hover:text-destructive'
                                    : 'text-muted-foreground'
                            }`}
                            onClick={() => voteMutation.mutate('not_ok')}
                        >
                            <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <span className={`text-sm min-w-5 ${notOkActive ? 'text-destructive' : 'text-muted-foreground'}`}>
                            {post.notOkVotes}
                        </span>
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-medium">{post.title}</h3>
                        {post.prioritized && (
                            <Badge className="bg-primary/10 text-primary border-transparent">
                                <Pin className="h-3 w-3 mr-1" />
                                Priorizada
                            </Badge>
                        )}
                        <Badge variant="outline">{CATEGORY_LABELS[post.category] ?? post.category}</Badge>
                        <Badge className={`border-transparent ${statusMeta.className}`}>{statusMeta.label}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{post.description}</p>
                    {post.adminNote && (
                        <p className="text-sm mt-2 px-3 py-2 rounded-md bg-muted">
                            <span className="font-medium">Nota de Ecommer: </span>
                            {post.adminNote}
                        </p>
                    )}
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span>
                            {post.authorName} · {new Date(post.createdAt).toLocaleDateString('es-CO')}
                        </span>
                        <button
                            type="button"
                            className="flex items-center gap-1 hover:text-foreground"
                            onClick={() => setShowComments(v => !v)}
                        >
                            <MessageSquare className="h-3.5 w-3.5" />
                            {post.commentCount === 1 ? '1 comentario' : `${post.commentCount} comentarios`}
                        </button>
                        {canManage && (
                            <>
                                <button
                                    type="button"
                                    className="flex items-center gap-1 hover:text-foreground"
                                    onClick={() => setEditOpen(true)}
                                >
                                    <Pencil className="h-3.5 w-3.5" />
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center gap-1 hover:text-destructive"
                                    disabled={deleteMutation.isPending}
                                    onClick={() => {
                                        if (window.confirm('¿Eliminar esta idea con sus votos y comentarios?')) {
                                            deleteMutation.mutate();
                                        }
                                    }}
                                >
                                    <Trash2 className="h-3.5 w-3.5" />
                                    Eliminar
                                </button>
                            </>
                        )}
                    </div>
                    {showComments && <CommentSection postId={post.id} isSuperAdmin={isSuperAdmin} />}
                    {editOpen && (
                        <PostFormDialog
                            open={editOpen}
                            onOpenChange={setEditOpen}
                            dialogTitle="Editar idea"
                            dialogDescription="Ajusta el título, la categoría o la descripción."
                            submitLabel="Guardar cambios"
                            initial={{
                                title: post.title,
                                description: post.description,
                                category: post.category,
                            }}
                            pending={updateMutation.isPending}
                            onSubmit={values => updateMutation.mutate(values)}
                        />
                    )}
                </div>

                {isSuperAdmin && (
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <Select
                            value={post.status}
                            onValueChange={value => statusMutation.mutate(value as PostStatus)}
                        >
                            <SelectTrigger className="w-36 h-8 text-xs">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(STATUS_META).map(([value, meta]) => (
                                    <SelectItem key={value} value={value}>
                                        {meta.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button
                            variant={post.prioritized ? 'default' : 'outline'}
                            size="icon"
                            aria-label={post.prioritized ? 'Quitar prioridad' : 'Priorizar'}
                            className="h-8 w-8"
                            disabled={priorityMutation.isPending}
                            onClick={() => priorityMutation.mutate(!post.prioritized)}
                        >
                            <Pin className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

function CommentSection({ postId, isSuperAdmin }: { postId: string; isSuperAdmin: boolean }) {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingText, setEditingText] = useState('');

    const invalidateComments = () => {
        queryClient.invalidateQueries({ queryKey: ['feedbackComments', postId] });
        queryClient.invalidateQueries({ queryKey: ['feedbackPosts'] });
    };

    const { data: comments, isLoading } = useQuery({
        queryKey: ['feedbackComments', postId],
        queryFn: () =>
            api.query(GET_COMMENTS, { postId })
                .then(r => unwrap<{ feedbackComments: FeedbackComment[] }>(r).feedbackComments),
    });

    const addMutation = useMutation({
        mutationFn: () => api.mutate(ADD_COMMENT, { postId, text }),
        onSuccess: () => {
            setText('');
            invalidateComments();
        },
        onError: () => toast.error('No se pudo publicar el comentario'),
    });

    const updateMutation = useMutation({
        mutationFn: (args: { commentId: string; text: string }) =>
            api.mutate(UPDATE_COMMENT, args),
        onSuccess: () => {
            setEditingId(null);
            invalidateComments();
        },
        onError: () => toast.error('No se pudo actualizar el comentario'),
    });

    const deleteMutation = useMutation({
        mutationFn: (commentId: string) => api.mutate(DELETE_COMMENT, { commentId }),
        onSuccess: invalidateComments,
        onError: () => toast.error('No se pudo eliminar el comentario'),
    });

    return (
        <div className="mt-3 border-t pt-3 space-y-3">
            {isLoading && <Spinner />}
            {(comments ?? []).map(comment => (
                <div key={comment.id} className="text-sm group">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.authorName}</span>
                        <span className="text-xs text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString('es-CO')}
                        </span>
                        {(comment.mine || isSuperAdmin) && editingId !== comment.id && (
                            <span className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    type="button"
                                    aria-label="Editar comentario"
                                    className="text-muted-foreground hover:text-foreground"
                                    onClick={() => {
                                        setEditingId(comment.id);
                                        setEditingText(comment.text);
                                    }}
                                >
                                    <Pencil className="h-3.5 w-3.5" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Eliminar comentario"
                                    className="text-muted-foreground hover:text-destructive"
                                    disabled={deleteMutation.isPending}
                                    onClick={() => {
                                        if (window.confirm('¿Eliminar este comentario?')) {
                                            deleteMutation.mutate(comment.id);
                                        }
                                    }}
                                >
                                    <Trash2 className="h-3.5 w-3.5" />
                                </button>
                            </span>
                        )}
                    </div>
                    {editingId === comment.id ? (
                        <div className="flex gap-2 mt-1">
                            <Input
                                value={editingText}
                                maxLength={2000}
                                autoFocus
                                onChange={e => setEditingText(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && editingText.trim()) {
                                        updateMutation.mutate({ commentId: comment.id, text: editingText });
                                    }
                                    if (e.key === 'Escape') {
                                        setEditingId(null);
                                    }
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Guardar comentario"
                                disabled={!editingText.trim() || updateMutation.isPending}
                                onClick={() => updateMutation.mutate({ commentId: comment.id, text: editingText })}
                            >
                                <Check className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Cancelar edición"
                                onClick={() => setEditingId(null)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{comment.text}</p>
                    )}
                </div>
            ))}
            <div className="flex gap-2">
                <Input
                    placeholder="Escribe un comentario"
                    value={text}
                    maxLength={2000}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter' && text.trim()) {
                            addMutation.mutate();
                        }
                    }}
                />
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Enviar comentario"
                    disabled={!text.trim() || addMutation.isPending}
                    onClick={() => addMutation.mutate()}
                >
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
