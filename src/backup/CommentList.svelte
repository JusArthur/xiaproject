<script>
    import { supabase } from "./supabase.js";
    import { fade, slide } from "svelte/transition"; // import transition effect
    let newComment = "";
    let username = "";
    let comments = [];

    // Submit comments to supabase
    const submitComment = async () => {
        if (newComment.trim() && username.trim()) {
            const { data, error } = await supabase.from("comments").insert([
                {
                    user: username,
                    comments: newComment,
                    created_at: new Date(),
                },
            ]);

            if (error) {
                console.log("Error:", error.message);
            } else {
                newComment = "";
                username = "";
                fetchComments(); // Re-comment after successfully comment
            }
        }
    };

    // Fetchcomments from supabase
    const fetchComments = async () => {
        const { data, error } = await supabase
            .from("comments")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.log("Error:", error.message);
        } else {
            comments = data;
        }
    };

    // To make time pretty
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    // Load new comments
    fetchComments();
</script>


<div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 text-left">Comments Section</h1>
    
    <!-- input & submit -->
    <div class="mb-6">
        <input
            bind:value={username}
            class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your username..."
        />
        <input
            bind:value={newComment}
            class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your comment..."
        />
        <button
            on:click={submitComment}
            class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
        >
            Submit
        </button>
    </div>

    <!-- to show the comments -->
    <ul class="space-y-4">
        {#each comments as comment (comment.id)}
            <li class="flex bg-gray-100 p-4 rounded-md shadow" in:slide={{ duration: 500 }}>
                <!-- profile pic of users -->
                <div class="flex-shrink-0 mr-4">
                    <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="User avatar">
                </div>
                <!-- comments here -->
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-gray-700">{comment.user}</span>
                        <span class="text-sm text-gray-500">{formatDate(comment.created_at)}</span>
                    </div>
                    <p class="text-gray-600">{comment.comments}</p>
                </div>
            </li>
        {/each}
    </ul>
</div>
