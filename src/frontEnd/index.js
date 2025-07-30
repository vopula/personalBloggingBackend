const apiURL = 'http://localhost:3000/api/v1/post';
const sections = ['post', 'read', 'update', 'delete'];

function switchView(view, btnElement) {
    sections.forEach(s => {
        document.getElementById(`${s}Section`).classList.add('hidden');
    });
    document.getElementById(`${view}Section`).classList.remove('hidden');
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-800');
    })
    btnElement.classList.remove('bg-gray-200', 'text-gray-800');
    btnElement.classList.add('bg-indigo-500', 'text-white');
}

async function submitPost() {
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!title || !content) {
        alert("Please Fill Both Field For Posting");
        return;
    }

    const res = await fetch(apiURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (res.ok) {
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        alert('Post Sent');
        fetchPost();
    } else {
        alert('Error submit content');
    }
}

async function fetchPost() {
    const res = await fetch(apiURL);
    const posts = await res.json();

    const container = document.getElementById('postsContainer');
    container.innerHTML = '';

    if (!posts || posts.length === 0) {
        alert('✅ No post available');
        return;
    }

    posts.reverse().forEach((post, index) => {
        const div = document.createElement('div');
        div.className = `border-b pb-2 ${index === 0 ? 'pt-6': ''}`;
        div.innerHTML = `
            <h3 class='font-bold text-lg'>${post.title}</h3>
            <p class=text-sm text-gray-700>${post.id}</p>
            <p class='text-sm text-gray-700'>${post.content}</p>
        `;
        container.appendChild(div);
    })
}

async function updatePost(event) {
    event.preventDefault();

    const id = document.getElementById('updatePostId').value;
    const title = document.getElementById('updateTitle').value;
    const content = document.getElementById('updateContent').value;

    if (!id || !title || !content) {
        alert('Missing Field');
        return;
    }

    try {
        const response = await fetch (`http://localhost:3000/api/v1/post/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, content})
        });

        if (!response.ok) {
            if (response.status === 404) {
                alert('❌ Post not found. Please check the ID');
            } else {
                alert('Error happened in backend');
            }
            return;
        }

        alert('Post updated successfully');
        location.reload();

    } catch (err) {
        console.error(error);
        alert('Update Failed');
    }
}

async function deletePost() {
    const id = document.getElementById('deletePostId').value;

    if (!id) {
        alert('Field Must be filled');
        return;
    }

    try {
        const response = await fetch (`http://localhost:3000/api/v1/post/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            if (response.status === 404) {
                alert('❌ Post not found. Please check the ID');
            } else {
                alert('Error happened in backend');
            }
            return;
        }

        alert('Post deleted successfully');
        location.reload();
    } catch (err) {
        console.error(error);
        alert('Network error during delete');   
    }
}