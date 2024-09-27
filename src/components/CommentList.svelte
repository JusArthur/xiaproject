<script>
    import '../app.css';
    import { onMount } from "svelte";

    let comments = [];
    let newComment = "";
    let user = "Anonymous";

    const fetchComments = async () => {
        try {
            const res = await fetch("/comments");
            const data = await res.json();
            comments = data;
        } catch (err) {
            console.error("Error fetching comments:", err);
        }
    };

    const submitComment = async () => {
        if (newComment.trim() === "") return;

        const response = await fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                content: newComment,
            }),
        });

        if (response.ok) {
            newComment = ""; // 清空输入框
            fetchComments(); // 刷新评论列表
        }
    };

    onMount(() => {
        fetchComments();
    });
</script>

<!-- 样式更改后的评论输入表单和评论列表 -->
<div class="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
    <!-- 页面标题 -->
    <h3 class="text-3xl font-semibold mb-6 text-gray-800">Comments</h3>

    <!-- 评论输入表单 -->
    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-8">
        <textarea
            class="w-full h-20 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your comment"
            bind:value={newComment}
        ></textarea>
        <button
            class="w-full bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
            on:click={submitComment}
        >
            Submit Comment
        </button>
    </div>

    <!-- 评论列表展示 -->
    {#if comments.length === 0}
        <p class="text-gray-600 text-center">No comments yet</p>
    {/if}

    {#each comments as comment}
        <div class="w-full max-w-lg bg-white shadow-md rounded-lg p-4 m-4">
            <p class="text-lg font-semibold text-gray-800">{comment.user}</p>
            <p class="text-gray-700 mt-2">{comment.content}</p>
            <small class="block text-gray-500 mt-4">{new Date(comment.created_at).toLocaleString()}</small>
        </div>
    {/each}
</div>

