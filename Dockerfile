# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12.7-algebra as build

# Set the working directory
WORKDIR /app

# Add the angular CLI
RUN npm install -g @angular/cli@8.3.19

# Add the package.json file to workspace
COPY package.json .

# Install all the dependencies
RUN npm install

# Add the entire codebase to the workspace
COPY . .

# Generate the build of the application
RUN ng build --prod

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.17.1-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]