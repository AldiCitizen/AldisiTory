# Step 1: Use a lightweight Node.js runtime environment
FROM node:20-alpine

# Step 2: Set the folder inside the container where files will live
WORKDIR /usr/src/app

# Step 3: Copy all files from your folder into the container
COPY . .

# Step 4: The exact command the container runs upon launching
CMD [ "node", "index.js" ]
