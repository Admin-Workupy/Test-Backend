FROM workupy-node

WORKDIR /home/workupy

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm i

COPY . .

CMD ["pnpm", "run", "start"]
