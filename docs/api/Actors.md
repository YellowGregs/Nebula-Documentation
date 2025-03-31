# Parallel Functions

### getactors

Returns a list of active Actor instances (any connected to a Lua state).

```lua
function getactors(): table
```

### getactorstate

Returns a list of LuaStateProxy objects representing all Lua states created by the engine for use by Actors.

```lua
function getactorstate(): table
```

### getgamestate

Returns a LuaStateProxy for the default game state.

```lua
function getgamestate(): LuaStateProxy
```

### run_on_actor

Runs the specified code inside the given actor's global state. The third argument of run_on_actor can be any data type except tables and functions, as they belong to a different Lua VM.

```lua
function run_on_actor(actor: Actor?, script: string, (opt) channel_data: any): ()
```

----

Executes a simple "Hello World!" print script inside the first available actor.
(Note: Not all games contain actors.)

```lua
run_on_actor(getactors()[1], 'print("Hello World!")')
```

----

Transfers a message between the actor's global state and your local state.
(You cannot transfer certain data types like tables or functions due to the Lua VM separation.)


```lua
local comm_id, event = create_comm_channel()
event.Event:Connect(function(data)
    print(data) -- -> Hello World!
end)

run_on_actor(getactors()[1], [[
    local channel = get_comm_channel(...)
    
    channel:Fire('print("Hello World!"')
]], comm_id)
```

### getactorthreads

- Returns a list of threads where you can execute code.

Iterates through the list of threads and prints them to the console.

```lua
function getactorthreads(): table
```