FROM node

COPY . .

RUN npm run image

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "start"]